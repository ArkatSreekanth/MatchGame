import './index.css'

const ThumbnailItem = props => {
  const {eachItem, onMatchImage} = props

  const checkMatchImage = id => {
    onMatchImage(id)
  }
  return (
    <li className="thumbnail">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={() => checkMatchImage(eachItem.id)}
      >
        <img
          src={eachItem.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
