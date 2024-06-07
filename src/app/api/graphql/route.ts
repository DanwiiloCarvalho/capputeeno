import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { data } from './data';
import { GraphQLDate } from 'graphql-scalars';
import { Product } from "@/types/product";
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';

const resolvers = {
  Date: GraphQLDate,
  Query: {
    //allProducts: () => data.products,
    allProducts: (parent:any, args:any) => {
      let filteredProducts = data.products as Product[]
      if (Object.entries(args).length === 0) {
        return data.products
      }
      if (args.filter.category) {
        filteredProducts = filteredProducts.filter(
          product => product.category === args.filter.category
        );
      }
      if (args.sortField && args.sortOrder) {
        filteredProducts = filteredProducts.sort((a: any, b: any) => {
          if (a[args.sortField] < b[args.sortField]) {
            return args.sortOrder === 'asc' ? -1 : 1
          }
          if (a[args.sortField] > b[args.sortField]) {
            return args.sortOrder === 'asc' ? 1 : -1
          }
          return 0
        })
      }
      return filteredProducts
    },
    Product: (parent: any, args: any) => {
      let filteredProducts = data.products as Product[]
      if (args.id) {
        let product = filteredProducts.filter(product => product.id === args.id)
        if (product.length > 0) {
          return product[0]
        }
      }
    }
  },
};

const typeDefs = gql`
  scalar Date

  type Product {
    name: String!
    description: String!
    image_url: String!
    category: String!
    id: ID!
    price_in_cents: Int!
    sales: Int!
    created_at: Date!
  }

  input ProductFilter {
    q: String
    ids: [ID]
    name: String
    description: String
    image_url: String
    category: String
    id: ID
    price_in_cents: Int
    sales: Int
    created_at: Date
    name_neq: String
    description_neq: String
    image_url_neq: String
    category_neq: String
    id_neq: ID
    price_in_cents_lt: Int
    price_in_cents_lte: Int
    price_in_cents_gt: Int
    price_in_cents_gte: Int
    price_in_cents_neq: Int
    sales_lt: Int
    sales_lte: Int
    sales_gt: Int
    sales_gte: Int
    sales_neq: Int
    created_at_lt: Date
    created_at_lte: Date
    created_at_gt: Date
    created_at_gte: Date
    created_at_neq: Date
  }

  type Query {
    Product(id: ID!): Product
    allProducts(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ProductFilter): [Product]
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  plugins: [ApolloServerPluginLandingPageDisabled()],

});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };