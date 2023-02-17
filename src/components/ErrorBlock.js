import {ReactComponent as CrossIcon} from "../assets/svg/cross.svg";

export const ErrorBlock = ({ error, clearAll }) => (
    <div className="bg-red-50 border-l-8 border-red-900 mb-2">
        <div className="flex items-center">
            <div className="p-2">
                <div className="flex items-center">
                    <button className="ml-2" onClick={clearAll}>
                        <CrossIcon className="h-8 w-8 text-red-900 mr-2 cursor-pointer"/>
                    </button>
                    <p className="px-6 py-4 text-red-900 font-semibold text-lg">Oops, we have some errors</p>
                </div>
                <div className="px-24 mb-4 text-left">
                    {error?.code && (<li className="text-md font-bold text-red-500 text-sm">{error?.code}</li>)}
                    {error?.name && (<li className="text-md font-bold text-red-500 text-sm">{error?.name}</li>)}
                    {error?.message && (<li className="text-md font-bold text-red-500 text-sm">{error?.message}</li>)}
                </div>
            </div>
        </div>
    </div>
)
