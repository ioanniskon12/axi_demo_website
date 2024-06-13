import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroSectionHeroSection extends Schema.Component {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Text: Attribute.Text;
    HeroImage: Attribute.Media<'images'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    MetaImage: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero-section.hero-section': HeroSectionHeroSection;
      'seo.meta-data': SeoMetaData;
    }
  }
}
