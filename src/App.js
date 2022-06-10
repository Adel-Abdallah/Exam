import "./App.css";
import Header from "./components/Header/index.js";
import ProductCountainer from "./components/ProductContainer/index.js";
import NotificationCountainer from "./components/NotificationContainer/index.js";
function App() {
  const notificationData = [
    {
      imageUrl: "The Football Is Good For Training And Recreational Purposes",
      title: "indexing Track leverage override Oklahoma",
      description: "Voluptatem aliquid placeat."
    },
    {
      imageUrl:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      title: "Chicken AI sensor Table program",
      description: "Blanditiis est eos sunt molestiae."
    },
    {
      imageUrl:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      title: "Chad Island content Product benchmark",
      description: "Sit minima ea fuga maiores veniam ut."
    },
    {
      imageUrl: "The Football Is Good For Training And Recreational Purposes",
      title: "Directives Shirt Cambridgeshire Modern connect",
      description: "Expedita sunt omnis."
    },
    {
      imageUrl: "The Football Is Good For Training And Recreational Purposes",
      title: "Mill THX Lodge Bedfordshire PCI",
      description:
        "Amet officiis et dolorem quibusdam incidunt architecto consequatur et et."
    },
    {
      imageUrl:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      title: "mint Saint proactive hub Delaware",
      description: "Atque accusamus qui rerum veritatis eius quia provident."
    }
  ];
  const productsDate = [
    {
      name: "Shoes",
      imageUrl: "https://loremflickr.com/150/150/fashion?25397",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      salePrice: "$2836.00",
      originalPrice: "$3343.00",
      percentOff: "33",
      sizes: [
        {
          isAvailable: false,
          label: "XS"
        },
        {
          isAvailable: true,
          label: "S"
        },
        {
          isAvailable: true,
          label: "M"
        },
        {
          isAvailable: false,
          label: "L"
        },
        {
          isAvailable: true,
          label: "XL"
        }
      ]
    },
    {
      name: "Shoes",
      imageUrl: "https://loremflickr.com/150/150/fashion?14459",
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      salePrice: "$1420.00",
      originalPrice: "$4460.00",
      percentOff: "63",
      sizes: [
        {
          isAvailable: false,
          label: "XS"
        },
        {
          isAvailable: true,
          label: "S"
        },
        {
          isAvailable: true,
          label: "M"
        },
        {
          isAvailable: false,
          label: "L"
        },
        {
          isAvailable: true,
          label: "XL"
        }
      ]
    }
  ];
  return (
    <div className='card'>
      <Header />
      <div className='row'>
        <ProductCountainer products={productsDate} />
        <NotificationCountainer notifications={notificationData} />
      </div>
    </div>
  );
}

export default App;
