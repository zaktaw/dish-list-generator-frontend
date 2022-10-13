import OutputItem from "./OutputItem";

function Output({ output }) {
    if (output.length == 0) {
        return <p>No dishes found matching query criteria</p>
    }
    else {
        return <div>
            {output.map(outputItem => {
                return <OutputItem outputItem={outputItem} />
            })}
        </div>
    }
}

export default Output;