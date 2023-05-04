import React, { useState } from 'react';


import '../components/olu.css'

function NFTSearch() {
  const [tokenId, setTokenId] = useState('');
  const [nftImageUrl, setNFTImageUrl] = useState('');
 
    const handleSearch = async () => {
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        const response = fetch(`'https://eth-mainnet.g.alchemy.com/nft/v2/WQ_2dy10s3AB7liOlPPx8C86yRbuxp7q/getNFTMetadata?contractAddress=0x123b30E25973FeCd8354dd5f41Cc45A3065eF88C&refreshCache=false'/${tokenId}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        const data = await response.json();
        setNFTImageUrl(data.image_url);
        
      }

  return (
    <div>
        <h2>Olu Lookup🔺</h2>
      <input type="text" placeholder="Enter token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {nftImageUrl && <img src={nftImageUrl} alt={`NFT with ID ${tokenId}`} />}
    </div>
  );
  
}

export default NFTSearch;
