import {useWebAppApi} from "../contexts/WebAppApiContext";
import {Dna} from "react-loader-spinner";

export const Loader = () => {
    const { loading } = useWebAppApi()

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
