
function Card(props){
    return(
            <div className="card">
                <div className="channelDetails">
                    <div className="channelLogo"><img src={props.channelLogoUrl} alt="channelLogo"></img></div>
                    <div className="channelName"><h3>{props.channelName}</h3></div>
                </div>
                <div className="video">
                <iframe width="423" height="233" src={props.thumbnailUrl} title="Rohit Sharma BEST interview ever" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="titleAndDetails">
                    <div className="title"><h2>{props.title} </h2></div>
                    <div className="likesViews">
                        <p>{props.likes}  views   {props.views}  likes</p>
                    </div>
                </div>
            </div>
    )
}

export default Card;