import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {toggleShowName} from "./store/profile/action";

export function Profile({}){

    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();
    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);


    return(
        <div className='Profile'>
                <input
                    type="checkbox"
                    checked={showName}
                    value={showName}
                    onChange={setShowName}
                />
                <span>Show Name</span>
                {showName && <div>{name}</div>}
        </div>
    )
}