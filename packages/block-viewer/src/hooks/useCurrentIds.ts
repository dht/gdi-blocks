import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMount } from 'react-use';
import { actions } from '../store';
import { findTemplateByBlockId } from '../utils/pages';

export function useCurrentIdsTemplate() {
    const dispatch = useDispatch();
    const { templateId } = useParams();

    useMount(() => {
        dispatch(
            actions.currentIds.patch({
                pageId: templateId,
                pageInstanceId: templateId,
            })
        );
    });
}

export function useCurrentIdsBlock() {
    const dispatch = useDispatch();
    const { blockId } = useParams();

    const templateId = findTemplateByBlockId(blockId as string);

    useMount(() => {
        if (!templateId) {
            return;
        }

        dispatch(
            actions.currentIds.patch({
                selectedInstanceId: blockId,
                pageId: templateId,
                pageInstanceId: templateId,
            })
        );
    });
}
