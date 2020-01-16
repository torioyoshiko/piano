function onClick(handler) {
    handler()
}

onClick(() => console.log('works'))

const x = () => { console.log('test') }

const y = x()

onClick(x())