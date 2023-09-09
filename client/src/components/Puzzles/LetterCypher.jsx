import seedrandom from 'seedrandom';

export default function LetterCypher ({seed}) {
    const greek = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩσς';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let answer = []
    let clue = ''

    for (let i = 0; i < 2; i++) {
        const num = Math.floor(seedrandom(seed - i) * 26)
        answer.push(num)
        clue+= greek[num]
    }

    return (

    )
}