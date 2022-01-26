import React from 'react'
import {useParams } from "react-router-dom";

export const Topic = () => {
    let { topicId } = useParams();

    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    )
}
