import {FC} from 'react';
import {TopicalityBadge} from "../TopicalityBadge/TopicalityBadge";
import {ITopicality} from "../../interfaces";


const Topicality: FC = () => {
    const rating: ITopicality = {name: 'Rating all time', query: {rating: 'vote_count.desc'}}

    return (
        <div style={{textAlign: 'center'}}>
            <TopicalityBadge topicality={rating}/>
        </div>
    );
};

export {Topicality};