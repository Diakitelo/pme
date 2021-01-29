export default function Person({results, handleDelete }){
  return (
    <>
    {
      results.map((resultat) => (  
      <p key={resultat.id}>
        {resultat.name }
        {resultat.number}
        <button onClick={() => handleDelete(resultat.id)} >Delete</button>
      </p>
      ))
    }
    </>
  );
}
