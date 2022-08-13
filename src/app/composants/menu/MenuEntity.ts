export interface MenuEntity {
  id?: string;
  titre?: string;
  icon?: string;
  url?: string;
  sousMenu?: Array<MenuEntity>;
}
