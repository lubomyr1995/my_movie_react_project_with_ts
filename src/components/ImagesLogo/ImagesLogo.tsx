import {FC} from 'react';
import {ImageList, ImageListItem} from "@mui/material";

import {IImageAdd} from "../../interfaces";
import {urls} from "../../constants";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";

interface IProps {
    images: IImageAdd[]
}

const ImagesLogo: FC<IProps> = ({images}) => {
    const dispatch = useAppDispatch();

    return (
        <ImageList sx={{width: 180, height: 450, boxSizing: 'border-box', padding: 1}} cols={1}>
            {images.map((item) => (
                <ImageListItem key={urls.image + item.file_path}>
                    <img
                        onClick={() => {
                            dispatch(movieActions.setImage(urls.backdrop + item.file_path))
                            dispatch(movieActions.setFlag(true))
                        }}
                        style={{borderRadius: 20, marginBottom: 3, width: '150px'}}
                        src={`${urls.image + item.file_path}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${urls.image + item.file_path}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={urls.image + item.file_path}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export {ImagesLogo};