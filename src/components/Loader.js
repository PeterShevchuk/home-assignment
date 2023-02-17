import {WebAppApiContext} from "../contexts/WebAppApiContext";
import {useContext} from "react";
import {Dna} from "react-loader-spinner";

export const Loader = () => {
    const { loading } = useContext(WebAppApiContext);

    return <div className="absolute -top-24 flex w-full justify-center">
        <Dna
            visible={loading}
            height="80"
            width="160"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
    </div>
}
