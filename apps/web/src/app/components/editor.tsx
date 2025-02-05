export function Editor(
    {docsId} : {
        docsId : string
    }
){
    const googleId = `https://docs.google.com/document/d/${docsId}/edit`
    return (
        <div>
            <iframe src={googleId}  width="100%" height="800px" allowFullScreen></iframe>
        </div>
    )
}