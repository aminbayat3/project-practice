import { DIRECTORY_DATA } from './directory-data';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const Directory = () => {
    const categories = DIRECTORY_DATA;
    return(
        <DirectoryContainer>
         {  
            categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))
         }
        </DirectoryContainer>
    )
}


export default Directory;