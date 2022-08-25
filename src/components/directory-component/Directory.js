import DirectoryItem from "../directory-item-component/Directory-item-component";
import categories from "../categories";
import './directory.styles.scss'

const Directory = () => {
    return (
        <div className='directory-container'>
            {categories.map(category => {
                return (
                    <DirectoryItem
                        key={category.id}
                        category={category}
                    />
                )
            })
            }
        </div>
    )
}

export default Directory