import * as fromFilters from './filter.actions';

const stateInitialFilters: fromFilters.filterValid = 'todos';

export function filterReducer( state = stateInitialFilters,
                               action: fromFilters.ActionsFilter ): fromFilters.filterValid {
    switch ( action.type ) {
        case fromFilters.SET_FILTER:
            return action.filter;
        default:
            return state;
    }

}