export default function Difficulty() {
    return (
        <div>
            <input type="radio" id="easy" name="difficulty"/>
            <label htmlFor="easy">Easy</label>
            <input type="radio" id="medium" name="difficulty"/>
            <label htmlFor="medium">Medium</label>
            <input type="radio" id="hard" name="difficulty"/>
            <label htmlFor="hard">Hard</label>
        </div>
    )
}
