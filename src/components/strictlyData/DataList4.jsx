import React from 'react'

export const DataList = () => {

const arrayList = [{headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}, {headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}, {headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}, {headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}, {headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}, {headline:"world is falling", illustration: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f7916c1-7db8-4c8b-93b0-fd0c1c264528_1536x1024.png", Date: Date.now(), ID: "534276ugvj"}]
//all comments have an originalPostID that is linked a certain origin tree, in this case ID is our ID of the object in this arrayList, right here, arrayList is where origintrees exist

console.log(arrayList.map((data)=>  data.headline + "oranges"))

  return (
    <div className='dataList'>
    
    {
       arrayList.map((data)=> {

return <div className='dataList__object'><img className="dataList__objectIllustration" src={data.illustration}/><h3>{data.headline}</h3></div>
        })
    }</div>
  )
}
