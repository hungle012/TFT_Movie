import React, { useState,useEffect } from "react";
import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import MicNoneIcon from '@mui/icons-material/MicNone';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const TextFieldCustom = styled(TextField)({
    '& input + fieldset': {
        borderColor: '#fbbd61',
        borderWidth: 2,
    },
    '& input:valid:hover + fieldset': {
        borderColor: '#fbbd61',
        borderWidth: 2,
    },
    '& input:invalid:hover + fieldset': {
        borderColor: '#fbbd61',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderWidth: 2,
        borderColor: '#fbbd61',
    },
    '& input:invalid:focus + fieldset': {
        borderWidth: 2,
        borderColor: '#fbbd61'
    },
    '& label': {
        color: '#fbbd61',
    },
    '& label.Mui-focused ': {
        color: '#fbbd61',
    }
});

function SearchFilm({ placeholder, data }) {

    const [filteredDataFilm, setFilteredDataFilm] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const { transcript } = useSpeechRecognition();
    useEffect(() => {
        setWordEntered(transcript);
    }, [transcript])
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.tenPhim.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredDataFilm([]);
        } else {
            setFilteredDataFilm(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredDataFilm([]);
        setWordEntered("");
    };
    // search OnMic
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }
    return (
        <div className="search container">
            <div className="searchInputs">
                <TextFieldCustom
                    label="Tìm Kiếm Phim"
                    fullWidth
                    variant="outlined"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                    onMouseMove={handleFilter}
                />
                <div className="searchIcon">
                    <span className="voice">
                        <MicNoneIcon onClick={SpeechRecognition.startListening}/>
                    </span>
                    <span className="icon__search">
                        {filteredDataFilm.length === 0 ? (
                            <SearchIcon />
                        ) : (
                            <CloseIcon id="clearBtn" onClick={clearInput} />
                        )}
                    </span>
                </div>
            </div>
            {filteredDataFilm.length !== 0 && (
                <div className="dataResult">
                    {filteredDataFilm.slice(0, 15).map((value, key) => {
                        return (
                            <a className="dataItem" href={`/detail/${value.maPhim}`} target="_blank " key={key}>
                                <div className="hinhAnh"><img src={value.hinhAnh} alt="..." /></div>
                                <div className="film">
                                    <span className="name__film">
                                        {value.tenPhim}
                                    </span>
                                    <span className="time">
                                        119 phút - 10 IMDb - 2D/Digital
                                    </span>
                                </div>

                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    )
}
export default SearchFilm;