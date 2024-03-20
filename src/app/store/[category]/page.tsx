import style from './layout'

interface CategoryProps {
    params: {
        category: string
    }
}

export default function Category(props: CategoryProps){
    const {category} = props.params
    return(
        <h1>Categoria dinamica: {category} </h1>
    )
}