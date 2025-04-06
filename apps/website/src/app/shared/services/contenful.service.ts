import { inject, Injectable } from '@angular/core';
import { Activity, CommunityLead } from '@angularph-monorepo/models';
import { APP_CONFIG } from 'apps/website/src/environments/app-config.token';
import { createClient, Entry, EntryCollection, EntrySkeletonType } from 'contentful';


@Injectable({
  providedIn: 'root'
})
export class ContenfulService {
  private readonly appConfig = inject(APP_CONFIG);

  private cdaClient = createClient({
    space: this.appConfig.CONTENTFUL_SPACE,
    accessToken: this.appConfig.CONTENTFUL_ACCESS_TOKEN
  });

  constructor() { }

  public getEvents(query?: object): Promise<Activity[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'events'
    }, query))
    .then(res => {
      return this.formatEvents (res);
    });
  }

  public getLeads(query?: object): Promise<CommunityLead[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'leads'
    }, query))
    .then(res => {
      return this.formatLeads (res);
    });
  }

  private formatLeads(event: EntryCollection<EntrySkeletonType, undefined, string>) {
    const items: CommunityLead[] = [];
    event.items.map((entry, index) => {
      const asset = event?.includes?.Asset?.find((asset) => asset.sys.id === (entry?.fields?.['thumbnail'] as {sys: {id: string}})?.sys?.id);
      items.push({
        id: index,
        name: entry.fields['name'] as string,
        description: entry.fields['description'] as string,
        thumbnail: asset?.fields?.file?.url || '',

      })
   })
   return items
  }

  private formatEvents(event: EntryCollection<EntrySkeletonType, undefined, string>) {
    const items: Activity[] = [];
    event.items.map((entry, index) => {
      const asset = event?.includes?.Asset?.find((asset) => asset.sys.id === (entry?.fields?.['thumbnail'] as {sys: {id: string}})?.sys?.id);
      const description = (entry.fields['description'] as any).content;
      items.push({
        id: index,
        title: entry.fields['title'] as string,
        description: description[0]['content'][0]['value'],
        date: new Date(entry.fields['date'] as string),
        thumbnail: asset?.fields?.file?.url || '',
        replay: entry.fields['replay'] as string,
      })
   })
   return items
  }
}
