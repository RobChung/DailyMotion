export default interface Video {
    // plus preview img, profile photo of creator?
    id:number,
    thumbnailURL:string,
    title:string,
    dateCreated:string,
    totalViews:number,
    creator:string,
    creatorAvatarURL:string
}