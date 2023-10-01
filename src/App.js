
import './App.css';
import Card from './Card';
function App() {
  const videos = [
    {
     id: 1,
     title: "Rohit Sharma BEST interview ever",
     thumbnailUrl: "https://www.youtube.com/embed/npV_fpQLJ38",
     likes: 2400,
     views: 10000,
     channelName: "Vimal Kumar ",
     channelLogoUrl: "https://yt3.googleusercontent.com/JZUVUJqNfMHk9fsQ6hHpbsY9Qb9AOsOa3yBKPHLOfTPDKzulaU9Xcss43wC5SQSOG1GTL_-W=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      title: "Rani Nighta Shur - Video Song",
      thumbnailUrl: "https://www.youtube.com/embed/aj6kuXMo0tY?list=RDGMEM916WJxafRUGgOvd6dVJkeQVMdOWgw8Ww6hk",
      likes: 63000,
      views: 3600000,
      channelName: "Everest Marathi",
      channelLogoUrl: "https://yt3.googleusercontent.com/LZMp4bFpOtiBm8L64HsPiaU8YXStYAt4_t0DvmyrbJHBgRySjYoA35-AbPKelInRQcFhR4JrtqU=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 3,
      title: "Janani Video Song ",
      thumbnailUrl: "https://www.youtube.com/embed/WEBvHPvf0hM?list=RDWEBvHPvf0hM",
      likes: 346000,
      views: 8100000,
      channelName: "T-Series ",
      channelLogoUrl: "https://yt3.googleusercontent.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 4,
      title: "2023 World Cup: Harsha Bhogle previews Team India",
      thumbnailUrl: "https://www.youtube.com/embed/VXc5Tm1MiUQ",
      likes: 2800,
      views: 99000,
      channelName: "Cricbuzz",
      channelLogoUrl: "https://yt3.googleusercontent.com/wntqEtC54q6jAEzNt1sLuxzefxaXoewn9FkT8JUPoxyGUFCAD8SU7xp_0RnyY3QFFCHsEaNLIfk=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 5,
      title: "Virat Kohli on RCB Podcast Full Episode",
      thumbnailUrl: "https://www.youtube.com/embed/rkBx3gYcbNw",
      likes: 75000,
      views: 1500000,
      channelName: "Royal Challengers Bangalore ",
      channelLogoUrl: "https://yt3.googleusercontent.com/szR92lL8-5jqaQ6m1Lmh2EE7uRuv1XC_FWnEgX_eFx07r2A_GlXbMvubEO-sbALvTsfCsBzegA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 6,
      title: "Yuzi Chahal Unfiltered -",
      thumbnailUrl: "https://www.youtube.com/embed/qr8R0cf2rq0",
      likes: 60000,
      views: 1700000,
      channelName: "Ranveer Allahbadia",
      channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKaliAtWp4BY35Kdm_PuH-mNsfjKx0kNd-prXUOZoQ=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 7,
      title: "Virat Kohli full interview",
      thumbnailUrl: "https://www.youtube.com/embed/1J0o3v8ptHY",
      likes: 747000,
      views: 3300000,
      channelName: "Oaktree Sports ",
      channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKZYCMCMkr0WUEdc4qrxnSq9kNP2rRzGuoJlzlEe=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 8,
      title: "Virat Kohli Gets Candid with Meethika Dwivedi",
      thumbnailUrl: "https://www.youtube.com/embed/Hk5jD2xpqqM",
      likes: 10000,
      views: 191000,
      channelName:"Star Sports",
      channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbwX-NLbwQUdVRX4Ln832NF8JsDqbSry96-SKJgGA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 9,
      title: "virat kohli&#39;s interview with Jatin Sapru....(Puma)",
      thumbnailUrl: "https://www.youtube.com/embed/_bHXu-JDRu8",
      likes: 425,
      views: 12000,
      channelName: "Virat Kohli",
      channelLogoUrl: "https://yt3.googleusercontent.com/jDW8q1bpV4bSZsqdcOeYMbj_lS5dB92Rf9ADH0WvkMtcYrsXlR-3zSGzjs5cfJwNTCziivisL-Q=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 10,
      title: "Gujarat Titans | GK meets GT Episode 10 ",
      thumbnailUrl: "https://www.youtube.com/embed/pyBuiHZtYVo",
      likes: 3700,
      views: 121000,
      channelName: "Gujarat Titans",
      channelLogoUrl: "https://yt3.googleusercontent.com/lLH_vAbqSWVEPTPglttheAVtBwdDdyh92rDbsHyz7cW42-Irmptv8dEthrgckjWApfsLGw08=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 11,
      title: "MS Dhoni Full Interview Priceless Moment ",
      thumbnailUrl: "https://www.youtube.com/embed/BEx9fEypIC4",
      likes: 32000,
      views: 1200000,
      channelName:"Stuff and All",
      channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbXRIYu5TmWcIujl1g6_plzQAeXgb0y1I6qLtukGHKpLKfN0uJeTd-F32zZls67=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 12,
      title: "Celebrating the Super Kings Way #IPL2023",
      thumbnailUrl: "https://www.youtube.com/embed/RtD4q4LnLUw",
      likes: 74000,
      views: 1600000,
      channelName: "Chennai Super Kings ",
      channelLogoUrl: "https://yt3.googleusercontent.com/Nt8wKzf7bK6j0aG6CDvymMoPnPbCEx0gnyMcOZDJuKYALlHUfVmEMhe7zaGDHwDjb7Fu9DrV8Q=s176-c-k-c0x00ffffff-no-rj",
    },
  
   ];
   
   
  return (
    <>
      <h1>YouTube-inspired gallery in React</h1>
      <div className='cardContainer'>
        {
          videos.map((video)=>{
            return <Card title={video.title} thumbnailUrl={video.thumbnailUrl} likes={video.likes} views={video.views} channelName={video.channelName} channelLogoUrl={video.channelLogoUrl}  />
          })
        }
      </div>
    </>
  );
}

export default App;
