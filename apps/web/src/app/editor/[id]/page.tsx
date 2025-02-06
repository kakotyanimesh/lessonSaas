import { Editor } from "../../components/editor"

export default async function EditorPage({params} : {
    params : {
        id : string
    }
}){
    const docsId = (await params).id

    if(!docsId) return <div>connecting ....</div>
    return (
        <div>
            <Editor docsId={docsId}/>
        </div>
    )
}