# Web3/Blockchain Backend Demo

Dự án này là một hệ thống Backend API (được viết bằng **NestJS**) dùng để tương tác với các Smart Contract trên blockchain platform dựa trên EVM. Đây là một project demo dùng để làm quen và chứng minh các kỹ năng về hệ sinh thái Web3 và Back-end chuyên sâu.

## Cấu trúc thư mục (Project Structure)

- `nft_api/`: Chứa mã nguồn backend NestJS. Bật các endpoint RESTful để client có thể gọi và thực thi tương tác (đọc/ghi) với smart contract.
- `smart_contract/`: Chứa các file Solidity, deployment scripts và compiled artifacts cho Smart Contract.

## Công nghệ sử dụng (Tech Stack)

- **Ngôn ngữ**: TypeScript, Solidity (Cơ bản)
- **Framework**: NestJS (Node.js) cho kiến trúc Backend chuẩn mực
- **Web3 Library**: `ethers.js` để kết nối RPC, quản lý wallet và gửi transaction lên Blockchain.

## Tính năng chính (Key Features)

- Tương tác với Smart Contract qua ABI.
- Tự động ủy quyền giao dịch (Transaction Signing) bằng Wallet Private Key ở phía Server.
- Cung cấp API `GET /nft/supply` để đọc tổng cung NFT mà không tốn Gas.
- Cung cấp API `POST /nft/mint` và `POST /nft/batch` để thực thi đúc NFT và chờ transaction hoàn tất (`tx.wait()`).
- Data Validation cơ bản với địa chỉ ví Ethereum.

## Hướng dẫn cài đặt (Setup Instructions)

1. **Vào thư mục API backend**
   ```bash
   cd nft_api
   ```

2. **Cài đặt thư viện**
   ```bash
   npm install
   ```

3. **Cấu hình biến môi trường**
   Bạn cần tạo một file `.env` ở thư mục `nft_api/` với các thiết lập sau:
   ```env
   RPC_URL=https://rpc-url-cua-mang-blockchain
   PRIVATE_KEY=0x_private_key_cua_vi_admin
   CONTRACT_ADDRESS=0x_dia_chi_cua_smart_contract_da_deploy
   ```

4. **Chạy ứng dụng**
   ```bash
   # Môi trường dev (watch mode)
   npm run start:dev

   # Build môi trường production
   npm run build
   npm run start:prod
   ```
