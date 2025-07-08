import { shuffleArr } from "./utils";

export const API_URL = "https://opentdb.com/api.php?amount=5";

export async function fetchQuizData(API_URL) {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error(response.status);

        const data = await response.json();

        const modified = data.results.map((item) => {
            const arrCopy = item.incorrect_answers.slice();
            arrCopy.push(item.correct_answer);
            //new arr with all answers
            return {
                ...item,
                all_answers: shuffleArr(arrCopy),
                selected_answer: null,
            };
        });

        console.log(modified);

        return modified;
    } catch (err) {
        console.error(err);
        return [];
    }
}
