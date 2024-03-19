import type { FunctionalComponent } from 'vue'

import {onMounted, ref, defineComponent} from "vue";

type FComponentProps = {
    message: string
}

type Events = {
    sendMessage(message: string): void
}

const test= ref(1233)
const w = ()=> test.value++



 const Test: FunctionalComponent<FComponentProps, Events> = (
     {message},
     {emit,slots,attrs}
) => {

    return (
        <>
        <button onClick={() => emit('sendMessage', message)}>
            {message} - {test.value}
        </button>

        <div onClick={w}>++++</div>
        </>
                )
}

Test.props = {
    message: {
        type: String,
        required: false
    }
}

Test.emits = {
    sendMessage: (value) => typeof value === 'string'
}

// export default  Test

export default defineComponent({
    setup(){
        onMounted(() =>console.log(3333))

        return ()=><Test />
    }

})

