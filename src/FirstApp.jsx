import PropTypes from 'prop-types'

export const FirstAppWatch = ( { title, subTitle, name} ) => {
  if(!title){
   throw new Error ('The title not exist')
  }
  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
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