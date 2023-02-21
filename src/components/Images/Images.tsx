import {FC} from 'react';
import {IconButton, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

import {urls} from "../../constants";
import {IImageAdd} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";

interface IProps {
    images: IImageAdd[]
}

const Images: FC<IProps> = ({images}) => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <ImageList sx={{width: '100%', height: 400}} cols={1}>
                {images.length > 0 && images.map((item) => (
                    <ImageListItem key={item.file_path}>
                        {item.file_path.length > 0 && <img
                            onClick={() => {
                                dispatch(movieActions.setImage(urls.backdrop + item.file_path))
                                dispatch(movieActions.setFlag(true))
                            }}
                            style={{borderRadius: 5, marginBottom: 2}}
                            src={`${urls.image + item.file_path}?w=248&fit=crop&auto=format`}
                            srcSet={`${urls.image + item.file_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.file_path}
                            loading="lazy"
                        />}
                        <ImageListItemBar
                            actionIcon={item.file_path.length > 0 && <IconButton
                                sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                onClick={() => {
                                    dispatch(movieActions.setImage(urls.backdrop + item.file_path))
                                    dispatch(movieActions.setFlag(true))
                                }}>
                                <InfoIcon/>
                            </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export {Images};