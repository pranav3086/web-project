const { useState } = React;

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'phones', label: 'Mobiles' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'tv', label: 'Television' },
  { id: 'audio', label: 'Audio' },
  { id: 'kitchen', label: 'Kitchen Appliances' },
  { id: 'wearables', label: 'Wearables' },
];

const makeProduct = (id, name, cat, price, desc, img) => {
  return { id, name, cat, price, desc, img: img };
};

const ALL_PRODUCTS = [
  makeProduct(1, 'iPhone 14 Pro', 'phones', 89999, 'Apple A16 Bionic', 'images/iphone14pro.jpg'),
  makeProduct(2, 'Samsung Galaxy S23', 'phones', 74999, 'Snapdragon 8 Gen 2', 'images/samsungs23.jpg'),
  makeProduct(3, 'OnePlus 11', 'phones', 56999, '100W Charging', 'images/oneplus11.jpg'),
  makeProduct(4, 'Google Pixel 7', 'phones', 59999, 'Google Tensor G2', 'images/googlepixel7.jpg'),
  makeProduct(5, 'Xiaomi 13 Pro', 'phones', 69999, 'Leica Optics', 'images/xiaomi13pro.jpg'),
  makeProduct(6, 'Realme GT 3', 'phones', 33999, '240W Charging', 'images/realmegt3.jpg'),
  makeProduct(7, 'iQOO 11', 'phones', 59999, '144Hz AMOLED', 'images/iqoo11.jpg'),
  makeProduct(8, 'Motorola Edge 40', 'phones', 29999, '165Hz pOLED', 'images/motorolaedge40.jpg'),
  makeProduct(9, 'Nothing Phone 2', 'phones', 44999, 'Glyph Interface', 'images/nothingphone2.jpg'),
  makeProduct(10, 'Vivo X90 Pro', 'phones', 84999, 'ZEISS Optics', 'images/vivox90.jpg'),
  makeProduct(11, 'OPPO Find X6', 'phones', 79999, 'Hasselblad Pro', 'images/oppofind6.jpg'),
  makeProduct(12, 'Samsung Galaxy A54', 'phones', 38999, '5G Ready', 'images/galaxya54.jpg'),
  makeProduct(13, 'MacBook Air M2', 'laptops', 114999, 'Apple M2 Chip', 'images/macbookairm2.jpg'),
  makeProduct(14, 'Dell XPS 15', 'laptops', 149999, 'OLED Touch Screen', 'images/dellxps15.jpg'),
  makeProduct(15, 'HP Spectre x360', 'laptops', 129999, '2-in-1 Laptop', 'images/hpspectrex360.jpg'),
  makeProduct(16, 'ThinkPad X1', 'laptops', 134999, 'Carbon Fiber', 'images/thinkpadx1.jpg'),
  makeProduct(17, 'ROG Zephyrus', 'laptops', 154999, 'Gaming Laptop', 'images/rogzephyrus.jpg'),
  makeProduct(18, 'Acer Swift Edge', 'laptops', 79999, 'Lightweight AMD', 'images/acerswiftedge.jpg'),
  makeProduct(19, 'MSI Creator Z16', 'laptops', 179999, 'For Creatives', 'images/msicreatorz16.jpg'),
  makeProduct(20, 'Dell Inspiron 16', 'laptops', 74999, 'Everyday Use', 'images/dellinspiron16.jpg'),
  makeProduct(21, 'HP Envy 15', 'laptops', 94999, 'Premium Build', 'images/hpenvy15.jpg'),
  makeProduct(22, 'Lenovo IdeaPad 5', 'laptops', 54999, 'Budget Friendly', 'images/lenovoideapad5.jpg'),
  makeProduct(23, 'ASUS VivoBook', 'laptops', 49999, 'Student Choice', 'images/asusvivobook.jpg'),
  makeProduct(24, 'Acer Predator', 'laptops', 144999, 'High Performance', 'images/acerpredator.jpg'),
  makeProduct(25, 'Samsung Neo 65"', 'tv', 89999, '4K Smart TV', 'images/samsungneo65.jpg'),
  makeProduct(26, 'LG OLED C3 55"', 'tv', 149999, 'OLED display', 'images/lgoledc355.jpg'),
  makeProduct(27, 'Sony Bravia A95K', 'tv', 249999, 'Premium XR', 'images/sonybravia.jpg'),
  makeProduct(28, 'Mi QLED 75"', 'tv', 79999, 'Large Screen', 'images/miqled75.jpg'),
  makeProduct(29, 'OnePlus TV 55"', 'tv', 49999, 'Android TV', 'images/oneplustv55.jpg'),
  makeProduct(30, 'Vu Premium 65"', 'tv', 44999, 'Affordable 4K', 'images/vutv.jpg'),
  makeProduct(31, 'TCL Mini LED', 'tv', 74999, 'Deep Blacks', 'images/tclminiled.jpg'),
  makeProduct(32, 'Hisense U8K', 'tv', 64999, 'Bright HDR', 'images/hisenseu8k.jpg'),
  makeProduct(33, 'Samsung The Frame', 'tv', 89999, 'Art Mode TV', 'images/samsungtheframe.jpg'),
  makeProduct(34, 'LG NanoCell', 'tv', 59999, 'Vibrant Colors', 'images/lgnanocell.jpg'),
  makeProduct(35, 'Sony X90L', 'tv', 84999, 'Full Array LED', 'images/sonyx90l.jpg'),
  makeProduct(36, 'Xiaomi A Pro', 'tv', 38999, 'Value 4K', 'images/xiaomiapro.jpg'),
  makeProduct(37, 'Sony WH-1000XM5', 'audio', 29999, 'Noise Cancelling', 'images/sonyhead.jpg'),
  makeProduct(38, 'Bose QC45', 'audio', 24999, 'Comfortable ANC', 'images/boseqc45.jpg'),
  makeProduct(39, 'Apple AirPods Pro 2', 'audio', 24900, 'Spatial Audio', 'images/airpodspro2.jpg'),
  makeProduct(40, 'Sennheiser Momentum', 'audio', 34999, 'Hi-Res Audio', 'images/sennheiser.jpg'),
  makeProduct(41, 'JBL PartyBox', 'audio', 34999, 'Loud Speaker', 'images/jblpartybox.jpg'),
  makeProduct(42, 'Sony SRS-XB43', 'audio', 9999, 'Extra Bass', 'images/sonysrs.jpg'),
  makeProduct(43, 'Jabra Evolve2', 'audio', 39999, 'Pro Headset', 'images/jabraevolve2.jpg'),
  makeProduct(44, 'Marshall Emberton', 'audio', 13999, 'Portable Speaker', 'images/marshallemberton.jpg'),
  makeProduct(45, 'Apple HomePod', 'audio', 29900, 'Smart Speaker', 'images/applehomepod.jpg'),
  makeProduct(46, 'B&W Px8', 'audio', 59999, 'Premium Sound', 'images/bnwpx8.jpg'),
  makeProduct(47, 'Nothing Ear', 'audio', 8999, 'Unique Design', 'images/nothingear2.jpg'),
  makeProduct(48, 'Sonos Era', 'audio', 44999, 'Room Filling Sound', 'images/sonosera.jpg'),
  makeProduct(49, 'Instant Pot Duo', 'kitchen', 7999, 'Multi Cooker', 'images/instantpotduo.jpg'),
  makeProduct(50, 'Philips Air Fryer', 'kitchen', 6999, 'Rapid Air Tech', 'images/philipsairfryer.jpg'),
  makeProduct(51, 'Bosch Mixer', 'kitchen', 18999, 'Baking Assistant', 'images/boschmixer.jpg'),
  makeProduct(52, 'Morphy Richards OTG', 'kitchen', 5499, 'Oven Toaster', 'images/morphyrichardsotg.jpg'),
  makeProduct(53, 'Nespresso Maker', 'kitchen', 12999, 'Coffee Machine', 'images/nespressomaker.jpg'),
  makeProduct(54, 'Breville Oven', 'kitchen', 24999, 'Smart Oven', 'images/brevilleoven.jpg'),
  makeProduct(55, 'Kenwood Chef', 'kitchen', 22999, 'Heavy Duty', 'images/kenwoodchef.jpg'),
  makeProduct(56, 'Vitamix Blender', 'kitchen', 34999, 'Pro Blending', 'images/vitamixblender.jpg'),
  makeProduct(57, 'Panasonic Microwave', 'kitchen', 9999, 'Inverter Tech', 'images/panasonicmicrowave.jpg'),
  makeProduct(58, 'Tefal Induction Hob', 'kitchen', 6999, 'Fast Heating', 'images/tefal.jpg'),
  makeProduct(59, 'KitchenAid Stand', 'kitchen', 49999, 'Classic Mixer', 'images/kitchenaid.jpg'),
  makeProduct(60, 'Instant Vortex', 'kitchen', 4999, 'Air Fryer Oven', 'images/instantvortex.jpg'),
  makeProduct(61, 'Apple Watch Ultra 2', 'wearables', 89900, 'Titanium Case', 'images/appleultra2.jpg'),
  makeProduct(62, 'Galaxy Watch6', 'wearables', 29999, 'BioActive Sensor', 'images/galaxywatch6.jpg'),
  makeProduct(63, 'Garmin Fenix 7', 'wearables', 79999, 'Outdoor GPS', 'images/garminfenix7.jpg'),
  makeProduct(64, 'Fitbit Sense 2', 'wearables', 19999, 'Health Tracking', 'images/fitbitsense2.jpg'),
  makeProduct(65, 'Amazfit GTR 4', 'wearables', 9999, 'Long Battery', 'images/amazfitgtr4.jpg'), 
  makeProduct(66, 'Google Pixel Watch', 'wearables', 29999, 'Wear OS', 'images/googlepixelwatch.jpg'),
  makeProduct(67, 'Withings ScanWatch', 'wearables', 31999, 'Hybrid Smartwatch', 'images/withingsscan.jpg'),
  makeProduct(68, 'Coros Vertix 2', 'wearables', 74999, 'Endurance Watch', 'images/coros2.jpg'),
  makeProduct(69, 'Noise ColorFit', 'wearables', 3999, 'Budget Tracker', 'images/noisecolorfit.jpg'),
  makeProduct(70, 'boAt Wave Flex', 'wearables', 2499, 'Stylish Entry', 'images/boat.jpg'),
  makeProduct(71, 'Suunto Race', 'wearables', 54999, 'Training Tool', 'images/suunto.jpg'),
  makeProduct(72, 'WHOOP 4.0', 'wearables', 17999, 'Recovery Monitor', 'images/whoop.jpg')
];

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  let visibleProducts = ALL_PRODUCTS;
  
  if (activeTab !== 'all') {
    visibleProducts = visibleProducts.filter(product => product.cat === activeTab);
  }
  
  if (searchQuery !== '') {
    visibleProducts = visibleProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Order placed successfully! Thank you for shopping.");
      setCart([]);
      setIsCartOpen(false);
    }
  };

  return (
    <div>
      <header>
        <h1 className="logo">E-CITI</h1>
        <div>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="btn" onClick={() => setIsCartOpen(true)}>
          🛒 Cart ({cart.length})
        </button>
      </header>

      <nav>
        {CATEGORIES.map(category => (
          <button 
            key={category.id}
            className={activeTab === category.id ? 'active' : ''}
            onClick={() => {
              setActiveTab(category.id);
              setSearchQuery('');
            }}
          >
            {category.label}
          </button>
        ))}
      </nav>

      <div className="banner">
        <h2>Welcome to E-CITI Electronics</h2>
        <p>Your one-stop shop for university tech needs.</p>
      </div>

      <div className="container">
        <h2>Products</h2>
        <div className="product-grid">
          {visibleProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            visibleProducts.map(product => (
              <div className="card" key={product.id}>
                {product.img ? (
  <img src={product.img} alt={product.name} />
) : (
  <div style={{width: '100%', height: '180px', backgroundColor: '#e2e2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px'}}>
    <span>📷 No Image</span>
  </div>
)}
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className="price">₹{product.price.toLocaleString('en-IN')}</div>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="btn" onClick={() => setIsCartOpen(false)}>Close ✖</button>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {cart.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <span>{item.name}</span>
                <span>₹{item.price.toLocaleString('en-IN')}</span>
              </div>
            ))
          )}
        </div>
        <button className="btn btn-primary" style={{width: '100%'}} onClick={handleCheckout}>
          Checkout
        </button>
        <div className="cart-total">
          Total: ₹{totalPrice.toLocaleString('en-IN')}
        </div>
        
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);