import { UseFormRegister } from "react-hook-form";

export type QuestionProps = {
    label: string;
    name: string;
    register: UseFormRegister<any>;
}

const Question: React.FC<QuestionProps> = ({ label, name, register }) => {
    return (
        <div>
            <label>
                <span>{label}</span>

                <div className="mt-2">そう思わない</div>
                {[...Array(7)].map((_, i) => (
                    <div key={i}>
                        <input type="radio" id={`${name}-${i}`} {...register(`${name}`, {required: "値を入力してください"})} value={i} />
                        <label htmlFor={`${i}`}>{i}</label>
                    </div>
                ))}
                <div className="mb-2">そう思う</div>
            </label>
        </div>
    )
}

export default Question;