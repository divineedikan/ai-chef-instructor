import ReactMarkdown from 'react-markdown'

export default function AiRecipe(props){
      return (
        <section className="suggested-recipe-container">
            <h2>Chef Idanskii Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>    
        </section>
    )
}