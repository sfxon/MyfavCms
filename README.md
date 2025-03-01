# MyfavCms

Kostenfreie Shopware 6 CMS Erweiterungen.

## Funktionsumfang

### 1. Myfav Listing Product

* Artikel-Gallerie und Buybox-Element für das CMS-Seiten.
* Zeigt eine erweiterte Artikel-Box an, die dem oberen Bereich einer Artikel-Detail Seite nachempfunden ist.
* Angezeigter Artikel kann konfiguriert werden.
* Zu finden in der Kategorie **Commerce**

* Admin-Block: ```blocks/commerce/myfav-listing-product```
* Admin-Element: ```elements/myfav-listing-product```
* DataResolver: ```MyfavListingProductCmsElementResolver```
* Frontend-JS: ```myfav-cms-open-review-on-page-load-plugin``` - Öffnet Bewertungs-Tab (Reviews) auf Artikel-Detail-Seiten und scrollt bis dorthin, wenn ein spezieller Parameter in der URL angegeben ist.
* Frontend-Block: ```cms-block-myfav-listing-product```
* Frontend-Element: ```cms-element-myfav-listing-product```
* Frontend-Erweiterung für Buy-Widget:  Verlinkt die Sterne-Bewertungen in der Buybox, falls sie innerhalb des CMS-Elements dargestellt wird.

### 2. Layout Spalten

* Stellt verschiedene Blöcke im CMS zur Verfügung, über die mehrspaltige Elemente im Shop eingestellt werden können.
* Verfügbar über eine neue Kategorie im CMS-Editor mit dem Namen "Layout Spalten"
* Bspw. 3 Spalten a 3md - 3md - 3md
* Bspw. 2 Spalten a 4 md - 8 md