# dsx-framework
A scalable &amp; developer-friendly design system framework.
# Scalable Design System Framework

## Introduction
This design system framework is built to support scalable, collaborative, and efficient design and development workflows. It integrates **Figma Variables, JSON Tokens, GitHub, Storybook, and Tailwind** to enable seamless collaboration between designers and engineers. 

## Key Features
- **Version Control for Figma Variables** → Converts Figma Variables into JSON for consistent styling.
- **Storybook for UI Testing** → Enables component testing and variant previews.
- **Automated Design Updates** → Changes in Figma sync automatically with development environments.
- **Tailwind Integration** → Ensures rapid UI implementation.
- **GitHub Repository for Documentation & Collaboration** → Centralized place for version control and contributions.

## Folder Structure
```
├── src
│   ├── components  # Reusable UI components
│   ├── tokens      # Design tokens (color, typography, spacing)
│   ├── styles      # Global styles
│   ├── utils       # Helper functions
│
├── docs
│   ├── guides      # Usage guidelines and best practices
│   ├── specs       # Component specifications
│
├── .github         # GitHub workflows and contribution guidelines
├── storybook       # UI documentation and component previews
├── figma           # Figma design assets and JSON exports
```

## Workflow
1. **Figma Variables → JSON Tokens**
   - Export variables using **Tokens Studio**
   - Convert them into JSON
   - Sync with Tailwind and Storybook

2. **Component Development in Storybook**
   - Create variants based on design tokens
   - Validate UI consistency
   - Sync with GitHub repo

3. **Deploy & Maintain**
   - Automate updates using GitHub Actions
   - Maintain documentation for scalability

## Next Steps
- Setup Storybook with Vite & Tailwind
- Configure GitHub workflows for automation
- Expand design token support for variables (stroke, radius, font, etc.)

---

# 확장 가능한 디자인 시스템 프레임워크

## 소개
이 디자인 시스템 프레임워크는 **Figma Variables, JSON Tokens, GitHub, Storybook, Tailwind**를 활용하여 확장 가능하고 협업이 용이한 디자인 및 개발 환경을 구축하는 것을 목표로 합니다.

## 주요 특징
- **Figma Variables 버전 관리** → Figma Variables를 JSON으로 변환하여 스타일 일관성 유지
- **Storybook을 활용한 UI 테스트** → 컴포넌트 테스트 및 다양한 변형 미리 보기 가능
- **자동화된 디자인 업데이트** → Figma에서 변경된 사항이 개발 환경과 자동 동기화
- **Tailwind 통합** → 신속한 UI 개발 지원
- **GitHub 저장소 활용** → 문서화 및 협업을 위한 중앙 관리 공간 제공

## 폴더 구조
```
├── src
│   ├── components  # 재사용 가능한 UI 컴포넌트
│   ├── tokens      # 디자인 토큰 (컬러, 타이포그래피, 여백 등)
│   ├── styles      # 글로벌 스타일
│   ├── utils       # 유틸리티 함수
│
├── docs
│   ├── guides      # 사용 가이드 및 베스트 프랙티스
│   ├── specs       # 컴포넌트 스펙 문서
│
├── .github         # GitHub 워크플로우 및 기여 가이드
├── storybook       # UI 문서 및 컴포넌트 프리뷰
├── figma           # Figma 디자인 에셋 및 JSON 변환 파일
```

## 작업 흐름
1. **Figma Variables → JSON 토큰 변환**
   - **Tokens Studio**를 활용하여 변수 내보내기
   - JSON 포맷으로 변환하여 Tailwind 및 Storybook과 동기화

2. **Storybook에서 컴포넌트 개발**
   - 디자인 토큰을 기반으로 컴포넌트 변형 생성
   - UI 일관성 검토 및 테스트
   - GitHub 저장소와 동기화

3. **배포 및 유지보수**
   - GitHub Actions를 활용한 자동화 업데이트
   - 문서화를 통해 확장성 유지

## 다음 단계
- Vite & Tailwind 기반 Storybook 설정
- GitHub 워크플로우 구성하여 자동화 적용
- 디자인 토큰 확장 (Stroke, Radius, Font 등 변수 지원)

