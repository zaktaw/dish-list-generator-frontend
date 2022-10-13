import OutputItem from "./OutputItem";

function Output({ output }) {
    return <div>
        {output.map(outputItem => {
            return <OutputItem outputItem={outputItem} />
        })}
    </div>

}

export default Output;