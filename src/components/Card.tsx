import type { FunctionalComponent } from 'vue'

type FComponentProps = {
    payload: any,
    nameCard:string,
    classCard:string
}

const BodyCard = ({payload}) => {
    return (payload?.map((element,index) => {
        return (
            <li key={index} className="mr-10 mb-10">
                <a target="_blank" className="color-link" href={element.link}>
                    {element.name} ,
                </a>
            </li>
        )
    }))
}

const Card: FunctionalComponent<FComponentProps, any> = (
    {payload,classCard,nameCard},
    {emit,slots,attrs}

) => {

    return (
        <div class={[classCard, "card-core"]}>
            <h3 class="text-center">{nameCard}</h3>
            <ul class="d-flex d-flex-wrap">
                <BodyCard payload={payload}/>
            </ul>
        </div>
    )
}

Card.props = {
    payload: {
        type: Array,
        required: true
    },
    nameCard:String,
    classCard:String
}

export default Card



