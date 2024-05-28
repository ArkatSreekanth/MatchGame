import './index.css'

const TabBar = props => {
  const {onClickTab, tabsList, tabId} = props

  const changeTab = id => {
    onClickTab(id)
  }
  return (
    <ul className="tabs-container">
      {tabsList.map(eachItem => (
        <li
          key={eachItem.tabId}
          className={`tab ${tabId === eachItem.tabId ? 'clicked-tab' : ''}`}
          onClick={() => changeTab(eachItem.tabId)}
        >
          <button type="button" className="tab-btn">
            {eachItem.displayText}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TabBar
