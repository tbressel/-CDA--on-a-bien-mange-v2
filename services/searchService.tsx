export async function searchByBarcode(barcode: string) {
    try {
    //   const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/3263859883713`);
      const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
    
      const data = await response.json();
  
      if (data.product) {
        console.log('test debug', data.product)
        return [data.product];
      } else {
        console.log('Aucun produit trouvé pour ce code-barres');
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la recherche par code-barres :', error);
      return [];
    }
  }
  


  export const searchByName = async (name: string) => {
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/api/v2/search?search_terms=${encodeURIComponent(name)}&fields=product_name,code,nutrition_grade_fr,ingredients_text_fr,packaging,brands,ingredients_text&page_size=10&sort_by=popularity`
      );
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des produits');
      }
  
      const data = await response.json();
      
      // Vérification si des produits existent dans la réponse
      if (data.products && data.products.length > 0) {
        return data.products;
      } else {
        console.log('Aucun produit trouvé');
        return [];
      }
    } catch (error) {
      console.error("Erreur lors de la recherche par nom :", error);
      return [];
    }
  };
  