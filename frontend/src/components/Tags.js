import react from 'react';

const Tags = (tag, confidence) => {
    return (
        <div className="tags">
            <h3 className="labels">{tag}</h3>
            <h5 className="confidence">{confidence}%</h5>
        </div>
    );
}
export default Tags;