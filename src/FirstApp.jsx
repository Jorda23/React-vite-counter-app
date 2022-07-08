//fragment <> </>
// const newMesssage = {
//     message: 'Hola Mundo',
//     title: 'Jordan'
// };

// const getSaludo = (a,b) => {
//     return a + b
// };

// export const FirstAppWatch = () => {
//     return (
//       <>
//         {/* <p>{ getSaludo(4,20) }</p> */}
//         {/* <code>{ JSON.stringify(newMesssage) }</code> */}
//         <h1>Jordan</h1>
//         <p>Subtitulo</p>
//       </>
//     )  
// }
import PropTypes from 'prop-types'

export const FirstAppWatch = ( { title, subTitle, name} ) => {
  if(!title){
   throw new Error ('The title not exist')
  }
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )  
}

FirstAppWatch.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

FirstAppWatch.defaultProps = {
  name: "My name is Jordan",
  subTitle: "There is not subtitle",
  title: "There is not title, thanks for attention"
}