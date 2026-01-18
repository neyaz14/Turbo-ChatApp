"use client";

interface ITextInputProps {
    placeholder: string ,
    classname? : string,
    onchange?:any
}


export const TextInput = ({ placeholder,classname,onchange }: ITextInputProps) => {
    return (
        <input
            placeholder={placeholder}
            className={classname}
            onChange={onchange}
            style={{
                padding:"10px",
                margin:"10px"
            }}
        >
            {/* {children} */}
        </input>
    );
};
