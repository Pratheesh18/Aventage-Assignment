// Initializing empty arrays to store the data
const customerOrder = [];
const restaurantOrders = [];

// Restaurants
const restaurants = ['Restaurant A', 'Restaurant B', 'Restaurant C'];

// Menu
const menus = {
  'Restaurant A': ['Item 1', 'Item 2'],
  'Restaurant B': ['Item 3', 'Item 4'],
  'Restaurant C': ['Item 5', 'Item 6'],
};

// price
const prices = {
  'Item 1': 10,
  'Item 2': 15,
  'Item 3': 12,
  'Item 4': 18,
  'Item 5': 20,
  'Item 6' : 30
};

function addToCustomerOrder(restaurant, item) {
  customerOrder.push({ restaurant, item, price: prices[item] });
}


function customerOrderProcess() {
  while (true) {
    const restaurant = prompt('Select a restaurant: ' + restaurants.join(', '));
    if (!restaurants.includes(restaurant)) {
      alert('Invalid restaurant selection. Please try again.');
      continue;
    }
    const menu = menus[restaurant];
    const item = prompt(`Select an item from ${restaurant}'s menu: ` + menu.join(', '));
    if (!menu.includes(item)) {
      alert('Invalid item selection. Please try again.');
      continue;
    }
    addToCustomerOrder(restaurant, item);
    const more = confirm('Add more items?');
    if (!more) {
      break;
    }
  }
}


function generateInvoice() {
  let totalCost = 0;
  const customerInfo = {
    name: ' Ben ',
    contact: 'benr@gmail.com',
  };

  customerOrder.forEach((order) => {
    totalCost += order.price;
  });

  const invoice = {
    customer: customerInfo,
    order: customerOrder,
    totalCost: totalCost,
  };

  return invoice;
}


function sendOrdersToRestaurants() {
  customerOrder.forEach((order) => {
    const { restaurant, item, price } = order;
    if (!restaurantOrders[restaurant]) {
      restaurantOrders[restaurant] = [];
    }
    restaurantOrders[restaurant].push({ item, price });
  });

  
  for (const restaurant in restaurantOrders) {
    console.log(`Order sent to ${restaurant}:`, restaurantOrders[restaurant]);
  }
}

// Main order 
customerOrderProcess();
const invoice = generateInvoice();
sendOrdersToRestaurants();

console.log('Customer Invoice:', invoice);
