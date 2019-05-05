import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatesConstants } from "../../constants/states.constants";
import { NavigateItemModel } from "./navigate-item.model";
import { IconsConstants } from "../../constants/icons.constants";

@Component({
  selector: 'app-navigate-menu',
  templateUrl: './navigate-menu.component.html',
  styleUrls: ['./navigate-menu.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigateMenuComponent {
  navigateItems: NavigateItemModel[] = [
    new NavigateItemModel(
      IconsConstants.FONT_AWESOME_ICONS.HOME,
      StatesConstants.HOME.TITLE,
      StatesConstants.HOME.LINK,
      ),
    new NavigateItemModel(
      IconsConstants.FONT_AWESOME_ICONS.SEARCH,
      StatesConstants.SEARCH.TITLE,
      StatesConstants.SEARCH.LINK,
    ),
    new NavigateItemModel(
      IconsConstants.FONT_AWESOME_ICONS.UPLOADER,
      StatesConstants.UPLOADER.TITLE,
      StatesConstants.UPLOADER.LINK,
    ),
    new NavigateItemModel(
      IconsConstants.FONT_AWESOME_ICONS.HISTORY,
      StatesConstants.HISTORY.TITLE,
      StatesConstants.HISTORY.LINK,
    ),
    new NavigateItemModel(
      IconsConstants.FONT_AWESOME_ICONS.PROFILE,
      StatesConstants.PROFILE.TITLE,
      StatesConstants.PROFILE.LINK,
      ),
  ];
}
