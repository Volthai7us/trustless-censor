export async function sentenceToIndexes(sentence) {
    const body = JSON.stringify({sentence: sentence})
    const json = await fetch("http://localhost:3000/sentence/to/indexes", {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )

    return await json.json()
}

export async function indexesToSentence(indexes) {
    indexes = indexes.filter(x => x !== 0)
    const body = JSON.stringify({indexes: indexes})
    const json = await fetch("http://localhost:3000/sentence/from/indexes", {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )

    return await json.json()
}

export async function prove(indexes, hash, positive) {
    const body = JSON.stringify({input: indexes, hash: hash, positive: positive ? 1 : 0})

    const json = await fetch("http://localhost:3000/noir/prove", {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    return await json.json()
}

export async function mimcHash(indexes) {
    const body = JSON.stringify({indexes: indexes})

    const json = await fetch("http://localhost:3000/noir/hash", {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    return await json.json()
}