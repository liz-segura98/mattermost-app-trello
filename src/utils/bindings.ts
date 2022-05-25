import {AppBinding, AppsState} from '../types';
import {AppBindingLocations, CommandTrigger, TrelloIcon, Commands} from '../constant';

export const newCommandBindings = (bindings: AppBinding[]): AppsState => {
    return {
        location: AppBindingLocations.COMMAND,
        bindings: [
            {
                icon: TrelloIcon,
                label: CommandTrigger,
                hint: `[${Commands.HELP} | ${Commands.ADD} | ${Commands.NEW} | ${Commands.CONFIGURE}]`,
                bindings,
            },
        ],
    };
};
